package com.ecommerce.react_application_spring.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.react_application_spring.Model.Cart;
import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Model.OrderItems;
import com.ecommerce.react_application_spring.Model.Orders;
import com.ecommerce.react_application_spring.Model.RequestOrderDTO;
import com.ecommerce.react_application_spring.Repository.CartRepository;
import com.ecommerce.react_application_spring.Repository.CustomersRepository;
import com.ecommerce.react_application_spring.Repository.OrderItemsRepository;
import com.ecommerce.react_application_spring.Repository.OrdersRepository;



@Service
@Transactional
public class OrderService {
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private CustomersRepository customersRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private OrderItemsRepository orderItemsRepository;


    public Orders saveOrder(RequestOrderDTO requestOrderDTO){
        Optional<Customers> customer = customersRepository.findById(requestOrderDTO.getCustomerId());
        Orders order = null;
        if(customer.isPresent()){
            order = new Orders(requestOrderDTO.getStatus(),requestOrderDTO.getAmount(),customer.get(),requestOrderDTO.getPaymentType(),requestOrderDTO.getPaymentReference()) ;
            order = ordersRepository.save(order);
            List<Cart> cartList = cartRepository.getCartItemsByCustomerId(customer.get().getId());
            List<OrderItems> orderItems = cartList.stream().map(cart-> new OrderItems(cart.getProduct(),cart.getQuantity())).collect(Collectors.toList());
            order.setOrderItems(orderItems);
            order.setStatus("success");
            order = ordersRepository.save(order);
            cartList.forEach(cart -> cartRepository.delete(cart));
            System.out.println(order.getOrderId());
            return order;
        }
        else {
            System.out.println("Can not place Order.");
            return null;
        }
    }

    public Orders getOrderById(Long id){
        return ordersRepository.getReferenceById(id);
    }
    
    public List<OrderItems> getOrderItemByOrderId(Long id){
        return ordersRepository.getOrderItemByOrderId(id);
    }
}
