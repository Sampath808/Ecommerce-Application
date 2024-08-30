package com.ecommerce.react_application_spring.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.react_application_spring.Model.OrderItems;
import com.ecommerce.react_application_spring.Service.OrderItemService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class OrderItemsController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping("orderItems/{id}")
    public List<OrderItems> getOrderItem(@RequestParam Long id) {
        return orderItemService.getOrderItemById(id);
    }
    
}
