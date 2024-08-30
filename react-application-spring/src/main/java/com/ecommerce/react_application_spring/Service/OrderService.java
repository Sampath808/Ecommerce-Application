package com.ecommerce.react_application_spring.Service;

import java.util.List;
import java.util.Optional;
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
    
    private CustomersRepository customersRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private OrderItemsRepository orderItemsRepository;


    public Long saveOrder(RequestOrderDTO requestOrderDTO){
        Optional<Customers> customer = customersRepository.findById(requestOrderDTO.getCustomerId());
        Orders order = null;
        if(customer.isPresent()){
            order = new Orders(requestOrderDTO.getStatus(),requestOrderDTO.getAmount(),customer.get(),requestOrderDTO.getPaymentType(),requestOrderDTO.getPaymentReference()) ;
        }
        if(order != null){
            ordersRepository.save(order);
        }
        if(order != null){
            List<Cart> cartList = cartRepository.getCartItemsByCustomerId(customer.get().getId());
            OrderItems orderItems = null;
            for(Cart cart:cartList){
                orderItems = new OrderItems(order,cart.getProduct(),cart.getQuantity());
                orderItemsRepository.save(orderItems);
                cartRepository.delete(cart);
            }
            System.err.println(order.getOrderId());
            return order.getOrderId();
        }
        else {
            System.err.println("Can not place Order.");
            return null;
        }
    }

    public Orders getOrderById(Long id){
        return ordersRepository.getReferenceById(id);
    }
    
}
