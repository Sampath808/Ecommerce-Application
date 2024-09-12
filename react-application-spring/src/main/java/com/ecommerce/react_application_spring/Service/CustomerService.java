package com.ecommerce.react_application_spring.Service;

import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Model.RequestCustomerDTO;
import com.ecommerce.react_application_spring.Repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomersRepository customersRepository;

    public Customers validateLogin(RequestCustomerDTO requestCustomerDTO){
        List<Customers> customerList = customersRepository.findAll();
        Optional<Customers> customerOptional = customerList.stream().filter(c->c.getEmail().equals(requestCustomerDTO.getEmail())).findFirst();
        if(customerOptional.isPresent()){
            Customers customer = customerOptional.get();
            if(customer.getPassword().equals(requestCustomerDTO.getPassword())){
                return customer;
            }
            else{
                return null;
            }
        }
        else{
            return null; 
        }

    }
    public Customers updateUserName (String newName, String oldName){
        Customers customer = customersRepository.findByFullName(oldName)
            .orElseThrow(() -> new UsernameNotFoundException("Customer not found"));
        
        customer.setFullName(newName);
        return customersRepository.save(customer);
    }

    public Customers updatePhoneNo (String newNumber, String fullName){
        Customers customer = customersRepository.findByFullName(fullName)
            .orElseThrow(() -> new UsernameNotFoundException("Customer not found"));
        
        customer.setPhoneNo(newNumber);
        return customersRepository.save(customer);
    }   

    public List<Customers> getAllCustomers(){
        return customersRepository.findAll();
    }

    public Optional<Customers> getCustomerById(Long theId){
        return customersRepository.findById(theId);
    }

    public Customers saveCustomer(Customers theCustomer){
        return  customersRepository.save(theCustomer);
    }

    public void deleteCustomerById(Long theId){
        customersRepository.deleteById(theId);
    }
}
