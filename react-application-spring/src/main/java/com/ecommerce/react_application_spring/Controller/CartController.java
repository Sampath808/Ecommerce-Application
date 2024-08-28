package com.ecommerce.react_application_spring.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Service.CartService;


@RestController
public class CartController {

    @Autowired
    private CartService cartService; 

    @PostMapping("/cart/save") 
    public List<Cart> addCartItem(@RequestBody RequestCartItemDTO requestCartItemDTO) {
        return cartService.saveCartItem( requestCartItemDTO);
    }
    
    @GetMapping("/cartItems/{customerId}")
    public List<Cart> getCart(@PathVariable Long customerId) {
        return cartService.getCartItems(customerId); 
    }

    @DeleteMapping("/cartItem/delete")
    public ResponseEntity<Void> deleteCartItem(@RequestBody RequestCartItemDTO requestCartItemDTO) {
        boolean isDeleted = cartService.deleteCartItem(requestCartItemDTO);
        
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/cart")
    public List<Cart> getFullCart(){
        return  cartService.getFullCart();
    }
}

