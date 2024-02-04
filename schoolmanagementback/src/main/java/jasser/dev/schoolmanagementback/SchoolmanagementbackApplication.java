package jasser.dev.schoolmanagementback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"jasser.dev.schoolmanagementback", "com.solution.controller"})
public class SchoolmanagementbackApplication {

	public static void main(String[] args) {
		SpringApplication.run(SchoolmanagementbackApplication.class, args);
	}

}
