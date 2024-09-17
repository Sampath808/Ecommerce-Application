package com.ecommerce.react_application_spring.Controller;


import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Model.RequestCustomerDTO;
import com.ecommerce.react_application_spring.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.web.exchanges.HttpExchange.Principal;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CustomersController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/customers/me")
    public ResponseEntity<Customers> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Customers currentCustomer = (Customers) authentication.getPrincipal();

        return ResponseEntity.ok(currentCustomer);
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customers>> allCustomers(){
        List <Customers> customers = customerService.getAllCustomers();

        return ResponseEntity.ok(customers);
    }

    @GetMapping("/customer/userNameUpdate")
    public Customers updateUserName(@RequestParam String newName, Principal principal) {
        String oldName = principal.getName();
        return customerService.updateUserName(newName,oldName);
    }

    @GetMapping("/customer/phoneNoUpdate")
    public Customers updatePhoneNumber(@RequestParam String newNumber, Principal principal) {
        String userName = principal.getName();
        return customerService.updatePhoneNo(newNumber,userName);
    }

    @PostMapping("/saveCustomer")
    public Customers createCustomer(@RequestBody Customers newCustomer) {
        return customerService.saveCustomer(newCustomer);
    }

    @GetMapping("/customer/{id}")
    public Optional<Customers> getCustomerById(@PathVariable Long id){
        return  customerService.getCustomerById(id);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    public void deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomerById(id);
    }

    @PostMapping("/validateCustomer")
    public Customers validateCustomer(@RequestBody RequestCustomerDTO requestCustomerDTO) {
        return customerService.validateLogin(requestCustomerDTO);
    }
    
}
