package com.ecommerce.react_application_spring.Model;

import lombok.Data;

@Data
public class ProductsDTO {
    private Long productId;
    private String name;
    private double price;
    private String imgUrl;
    private String priceTag;
}
