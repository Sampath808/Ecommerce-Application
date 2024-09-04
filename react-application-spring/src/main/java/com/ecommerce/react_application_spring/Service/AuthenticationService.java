package com.ecommerce.react_application_spring.Service;

import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Repository.CustomersRepository;
import com.ecommerce.react_application_spring.dtos.LoginCustomerDto;
import com.ecommerce.react_application_spring.dtos.RegisterCustomerDto;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final CustomersRepository customersRepository;
    
    private final PasswordEncoder passwordEncoder;
    
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        CustomersRepository userRepository,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.customersRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Customers signup(RegisterCustomerDto input) {
        Customers customer = new Customers(input.getUserName(),input.getPhoneNo(),input.getEmail(),(passwordEncoder.encode(input.getPassword())),input.getState());
    
        return customersRepository.save(customer);
    }

    public Customers authenticate(LoginCustomerDto input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        return customersRepository.findByEmail(input.getEmail())
                .orElseThrow();
    }
}
