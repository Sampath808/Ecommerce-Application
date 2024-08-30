package com.ecommerce.react_application_spring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.react_application_spring.Model.OrderItems;
import com.ecommerce.react_application_spring.Repository.OrderItemsRepository;

@Service
@Transactional
public class OrderItemService {
    @Autowired
    private OrderItemsRepository orderItemsRepository;

    public List<OrderItems> getOrderItemById(Long id){
        return orderItemsRepository.getOrderItemByOrderId(id);
    }
}
