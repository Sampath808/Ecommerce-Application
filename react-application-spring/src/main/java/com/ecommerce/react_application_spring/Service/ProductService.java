package com.ecommerce.react_application_spring.Service;


import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getAllProducts(){
        return productsRepository.findAll();
    }

    public Optional<Products> getOneProduct(Long theId){
        return productsRepository.findById(theId);
    }

    public Products saveProduct(Products product){
        return  productsRepository.save(product);
    }
}