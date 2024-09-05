package com.ecommerce.react_application_spring.Controller;


import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.react_application_spring.Model.Customers;
import com.ecommerce.react_application_spring.Service.AuthenticationService;
import com.ecommerce.react_application_spring.Service.JwtService;
import com.ecommerce.react_application_spring.dtos.LoginResponse;
import com.ecommerce.react_application_spring.dtos.LoginCustomerDto;
import com.ecommerce.react_application_spring.dtos.RegisterCustomerDto;

@RequestMapping("/auth")
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
    private final JwtService jwtService;
    
    private final AuthenticationService authenticationService;


    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Customers> register(@RequestBody RegisterCustomerDto registerCustomerDto) {
        Customers registeredCustomer = authenticationService.signup(registerCustomerDto);
        return ResponseEntity.ok(registeredCustomer);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginCustomerDto loginCustomerDto) {
        Customers authenticatedCustomer = authenticationService.authenticate(loginCustomerDto);


        Map<String, Object> claims = new HashMap<>();
        claims.put("name", authenticatedCustomer.getUsername());
        claims.put("phoneNo", authenticatedCustomer.getPhoneNo());
        claims.put("id", authenticatedCustomer.getId());
        String jwtToken = jwtService.generateToken(claims, authenticatedCustomer);

        LoginResponse loginResponse = new LoginResponse(jwtToken,jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }
}