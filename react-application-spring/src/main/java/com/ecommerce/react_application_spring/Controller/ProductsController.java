package com.ecommerce.react_application_spring.Controller;

import java.util.List;
import java.util.Optional;
import com.ecommerce.react_application_spring.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Model.ProductsDTO;


@RestController
@CrossOrigin("http://localhost:5173")
public class ProductsController {
    
    @Autowired
    private ProductService productService;
    
    @Value("${imagesPath}")
    private String imagesPath;

    @PostMapping("/saveProduct")
    public Products createProduct(@RequestBody Products newProduct) {
        return productService.saveProduct(newProduct);
    }
    
    @GetMapping("/products")
    public List<ProductsDTO> getProducts() {
        return productService.getAllProducts(); 
    }
    @GetMapping("/product/{id}")
    public Optional<Products> getProductById(@PathVariable Long id){
        return  productService.getOneProduct(id);
    }
}
