package com.ecommerce.react_application_spring.Controller;

import java.util.List;
import java.util.Optional;

import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import com.ecommerce.react_application_spring.Service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.react_application_spring.Model.Products;


@RestController
@CrossOrigin("http://localhost:5173")
public class ProductsController {
    
    @Autowired
    private ProductService productService;
    
    
    
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
    
    @Value("${imagesPath}")
    private String imagesPath;
    private final Path imageDirectory = Paths.get(imagesPath);

    @GetMapping("/image/{id}")
    public ResponseEntity<Resource> getProductImage(@PathVariable Long id) {
        Optional<Products> product = productService.getOneProduct(id);
        if (product.isPresent() && product.get().getImgName() != null) {
            try {
                Path file = imageDirectory.resolve(product.get().getImgName());
                Resource resource = new UrlResource(file.toUri());
                if (resource.exists() || resource.isReadable()) {
                    return ResponseEntity.ok()
                                         .body(resource);
                } else {
                    return ResponseEntity.notFound().build();
                }
            } catch (Exception e) {
                return ResponseEntity.status(500).build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
