package com.ecommerce.react_application_spring.Model;


public class ProductsDTO {
    private Long productId;
    private String name;
    private double price;
    private String imgUrl;
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
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getImgUrl() {
        return imgUrl;
    }
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    public String getPriceTag() {
        return priceTag;
    }
    public void setPriceTag(String priceTag) {
        this.priceTag = priceTag;
    }
}
