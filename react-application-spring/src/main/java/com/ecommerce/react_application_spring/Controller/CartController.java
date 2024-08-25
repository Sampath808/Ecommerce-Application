package com.ecommerce.react_application_spring.Controller;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Service.CartService;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/cart/save")
    public Cart addCartItem(@RequestBody Cart cart) {
        return cartService.saveCartItem(cart);
    }

    @GetMapping("/cartItems/{customerId}")
    public List<Cart> getCarts(@PathVariable Long customerId) {
        return cartService.getAllCartItems(customerId); 
    }
    @GetMapping("/cart/{id}")
    public Optional<Cart> getCartById(@PathVariable Long id){
        return  cartService.getOneCartItem(id);
    }
}

