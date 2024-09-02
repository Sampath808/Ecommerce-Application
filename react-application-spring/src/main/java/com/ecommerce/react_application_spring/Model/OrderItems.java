package com.ecommerce.react_application_spring.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderItems {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemsId;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id",nullable = false)
    private Orders order;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;
    private int quantity;
    
    public OrderItems() {
    }
    
  
    public OrderItems(Orders order, Products product, int quantity) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
    }


    public Long getOrderItemsId() {
        return orderItemsId;
    }
    public void setOrderItemsId(Long orderItemsId) {
        this.orderItemsId = orderItemsId;
    }
    public Orders getOrder() {
        return order;
    }
    public void setOrder(Orders order) {
        this.order = order;
    }
    public Products getProduct() {
        return product;
    }
    public void setProduct(Products product) {
        this.product = product;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    @Override
    public String toString() {
        return "OrderItems [orderItemsId=" + orderItemsId + ", order=" + order + ", product=" + product + ", quantity="
                + quantity + "]";
    }

   

 
    

}
