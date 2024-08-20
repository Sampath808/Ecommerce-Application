package com.ecommerce.react_application_spring.Controller;


import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
public class CustomersController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/saveCustomer")
    public Customers createCustomer(@RequestBody Customers newCustomer) {
        return customerService.saveCustomer(newCustomer);
    }

    @GetMapping("/customers")
    public List<Customers> getCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/customer/{id}")
    public Optional<Customers> getProductById(@PathVariable int id){
        return  customerService.getOneCustomer(id);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public void deleteCustomer(@PathVariable int id){
        customerService.deleteCustomer(id);
    }
}
