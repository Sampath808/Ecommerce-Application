package com.ecommerce.react_application_spring.Service;


import com.ecommerce.react_application_spring.Controller.ProductsDTO;
import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Value("${imagesPath}")
    private String imagesPath;

    @Autowired
    private ProductsRepository productsRepository;

    private ProductsDTO convertEntityToDTO(Products product){
        ProductsDTO productsDTO = new ProductsDTO();
        productsDTO.setName(product.getName());
        productsDTO.setPrice(product.getSellingPrice());
        productsDTO.setPriceTag(product.getPriceTag());
        productsDTO.setProductId(product.getProductId());
        // productsDTO.setImgUrl(imagesPath + product.getImgName());
        return productsDTO; 
    }
    
    

    public List<ProductsDTO> getAllProducts(){
        return productsRepository.findAll()
        .stream()
        .map(this::convertEntityToDTO)
        .collect(Collectors.toList());
    }

    public Optional<Products> getOneProduct(Long theId){
        return productsRepository.findById(theId);
    }

    public Products saveProduct(Products product){
        return  productsRepository.save(product);
    }
}