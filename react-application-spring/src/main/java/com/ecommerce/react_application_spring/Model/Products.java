package com.ecommerce.react_application_spring.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Products {
    @Id
    @GeneratedValue
    private Long productId;
    private String name;
    private double sellingPrice;
    private String imgName;
    private String priceTag;

   

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(double sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
    }
    
    public String getPriceTag() {
        return priceTag;
    }

    public void setPriceTag(String priceTag) {
        this.priceTag = priceTag;
    }

}
