package com.ecommerce.react_application_spring.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.react_application_spring.Controller.RequestCartItemDTO;
import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Repository.CartRepository;
import com.ecommerce.react_application_spring.Repository.CustomersRepository;
import com.ecommerce.react_application_spring.Repository.ProductsRepository;

@Transactional
@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CustomersRepository customersRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Transactional
    public List<Cart> saveCartItem(RequestCartItemDTO requestCartItemDTO){
        List<Cart> cartItems = cartRepository.getCartItemsByCustomerId(requestCartItemDTO.getCustomerId());
        Optional<Cart> cartItemOptional = cartItems.stream().filter(c->c.getProduct().getProductId().equals(requestCartItemDTO.getProductId())).findFirst();
        Cart cartItem = null;
        if(cartItemOptional.isPresent()){
            cartItem = cartItemOptional.get();
            if(requestCartItemDTO.getQuantity() == 0 ){
                cartRepository.delete(cartItem);
                cartItem = null;
            }
            else{
                cartItem.setQuantity(requestCartItemDTO.getQuantity());
            }
        } else {
            Optional<Customers> customer = customersRepository.findById(requestCartItemDTO.getCustomerId());
            Optional<Products> product = productsRepository.findById(requestCartItemDTO.getProductId());
            if(product.isPresent() && customer.isPresent()){
                cartItem = new Cart(customer.get(),product.get(), 1);
            }
        }
        if(cartItem != null){
            cartRepository.save(cartItem);
        }
        else{
            System.out.println("Can not add item to cart");
        }
        return cartRepository.getCartItemsByCustomerId(requestCartItemDTO.getCustomerId());
    }


    public List<Cart> getCartItems(Long customerId){
        return cartRepository.getCartItemsByCustomerId(customerId);
    }

    public boolean deleteCartItem(RequestCartItemDTO requestCartItemDTO){
        List<Cart> cartItems = cartRepository.getCartItemsByCustomerId(requestCartItemDTO.getCustomerId());
        Optional<Cart> cartItemOptional = cartItems.stream().filter(c->c.getProduct().getProductId().equals(requestCartItemDTO.getProductId())).findFirst();    
        Cart cartItem = null;
        if(cartItemOptional.isPresent()){
            cartItem = cartItemOptional.get();
            cartRepository.delete(cartItem);
            return true;
        }
        else {
            System.out.println("Cart item not found for deletion");
            return false;
        }

    }

    public List<Cart> getFullCart() {
        return cartRepository.findAll();
    }
}
