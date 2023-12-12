package com.gym.backend.model;

import lombok.Data;

@Data
public class User {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private Long phoneNumber;
}
