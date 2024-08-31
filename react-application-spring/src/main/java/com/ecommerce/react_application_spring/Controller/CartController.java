package com.ecommerce.react_application_spring.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Model.RequestCartItemDTO;
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

    
    @GetMapping("/cart")
    public List<Cart> getFullCart(){
        return  cartService.getFullCart();
    }
}

