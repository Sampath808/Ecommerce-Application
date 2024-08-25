package com.ecommerce.react_application_spring.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Repository.CartRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public Cart saveCartItem(Cart cart){
        return cartRepository.save(cart);
    }

    public List<Cart> getAllCartItems(Long customerId){
        return cartRepository.getCartItemsByCustomerId(customerId);
    }

    public Optional<Cart> getOneCartItem(Long id){
        return cartRepository.findById(id);
    }

    public void deleteCart(Long id){
        cartRepository.deleteById(id);
    }
}
