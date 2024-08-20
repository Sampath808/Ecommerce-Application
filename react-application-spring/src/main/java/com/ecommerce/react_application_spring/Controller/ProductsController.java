package com.ecommerce.react_application_spring.Controller;

import java.util.List;
import java.util.Optional;

import com.ecommerce.react_application_spring.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Products;


@RestController
public class ProductsController {
    @Autowired
    private ProductService productService;
    
    @PostMapping("/saveProduct")
    public Products createProduct(@RequestBody Products newProduct) {
        return productService.saveProduct(newProduct);
    }

    @GetMapping("/products")
    public List<Products> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public Optional<Products> getProductById(@PathVariable Long id){
        return  productService.getOneProduct(id);
    }
    
}
