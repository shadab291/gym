package com.gym.backend.controller;

import com.gym.backend.model.User;
import com.gym.backend.model.Contact;
import com.gym.backend.service.UserService;
import com.gym.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")
public class FormController {

    private final UserService userService;
    private final ContactService contactService;

    @Autowired
    public FormController(UserService userService, ContactService contactService) {
        this.userService = userService;
        this.contactService = contactService;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PostMapping("/contacts")
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }
    // Add other endpoints for specific functionalities if needed
}
