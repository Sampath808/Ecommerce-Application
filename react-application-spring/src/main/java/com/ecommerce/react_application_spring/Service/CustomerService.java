package com.ecommerce.react_application_spring.Service;

import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomersRepository customersRepository;

    public List<Customers> getAllCustomers(){
        return customersRepository.findAll();
    }

    public Optional<Customers> getOneCustomer(int theId){
        return customersRepository.findById(theId);
    }

    public Customers saveCustomer(Customers theCustomer){
        return  customersRepository.save(theCustomer);
    }

    public void deleteCustomer(int theId){
        customersRepository.deleteById(theId);
    }
}
