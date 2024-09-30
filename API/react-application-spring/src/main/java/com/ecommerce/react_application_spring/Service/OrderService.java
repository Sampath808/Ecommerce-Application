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

    public Orders saveOrder(RequestOrderDTO requestOrderDTO){
        Optional<Customers> customer = customersRepository.findById(requestOrderDTO.getCustomerId());
        Orders order = null;
        if(customer.isPresent()){
            order = new Orders(requestOrderDTO.getStatus(),requestOrderDTO.getAmount(),customer.get(),requestOrderDTO.getPaymentType(),requestOrderDTO.getPaymentReference()) ;
            Orders dbOrder = ordersRepository.save(order);
            List<Cart> cartList = cartRepository.getCartItemsByCustomerId(customer.get().getId());
            List<OrderItems> orderItems = cartList.stream().map(cart-> new OrderItems(dbOrder,cart.getProduct(),cart.getQuantity())).collect(Collectors.toList());
            dbOrder.setOrderItems(orderItems);
            dbOrder.setStatus("Order Placed");
            ordersRepository.save(order);
            cartList.forEach(cart -> cartRepository.delete(cart));
            System.out.println(dbOrder.getOrderId());
            return dbOrder;
        }
        else {
            System.out.println("Can not place Order.");
            return null;
        }
    }

    public Orders getOrdersByOrderId(Long id){
        return ordersRepository.findById(id).orElse(null);
    }
    
    public List<Orders> getOrdersByCustomerId(Long id){
        return ordersRepository.getOrdersByCustomerId(id);
    }

    public Orders updateStatus(Long id){
        Optional<Orders> orderOptional = ordersRepository.findById(id);
        Orders order = null;
        if(orderOptional.isPresent()){
            order = orderOptional.get();
            order.setStatus("Order Cancelled");
            order = ordersRepository.save(order);
            return order;
        }
        else {
            System.out.println("Can not update Order status.");
            return null;
        }
    }
}
