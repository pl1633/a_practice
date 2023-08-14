package Hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("home")
    public String home(){
        return "home";
    }

    @GetMapping("/")
    public String homehome(){
        return "home";
    }
}
