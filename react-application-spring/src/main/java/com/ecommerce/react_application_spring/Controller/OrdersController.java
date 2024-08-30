package com.ecommerce.react_application_spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.react_application_spring.Model.Orders;
import com.ecommerce.react_application_spring.Model.RequestOrderDTO;
import com.ecommerce.react_application_spring.Service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class OrdersController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/orders/save")
    public Long saveOrder(@RequestBody RequestOrderDTO requestOrderDTO) {
        return orderService.saveOrder(requestOrderDTO);
    }

    @GetMapping("/orders/{id}")
    public Orders getOrder(@RequestParam Long id) {
        return orderService.getOrderById(id);
    }
    
    
}