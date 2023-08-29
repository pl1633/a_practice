package com.intro.test.controller;

import com.intro.test.domain.Member;
import com.intro.test.domain.MemberForm;
import com.intro.test.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/members/new")
    public String createForm(){
        return "members/createMemberForm";
    }

    @PostMapping("/members/new")
    public String create(MemberForm form){
        Member member = new Member();
        member.setName(form.getName());
        member.setPassword(form.getPassword());
        log.info(form.getName());
        memberService.join(member);
        return "redirect:/";
    }

    @GetMapping(value = "/members") //
    public String list(Model model) {
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }

    @DeleteMapping("/member/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        log.info(String.valueOf(id));
        memberService.delete(id);
        return "redirect:/";
    }

    @RequestMapping("/member/update/{name}")
    public ModelAndView update(@PathVariable("name") String name){
        ModelAndView mv = new ModelAndView();
        mv.addObject("name",name);
        mv.setViewName("/members/updateMember");
        return mv;
    }

    @RequestMapping("/member/update")
    public String updateDB(HttpServletRequest httpServletRequest){
        String name = httpServletRequest.getParameter("name");
        log.info(name);
        String password = httpServletRequest.getParameter("password");
        log.info(password);
        memberService.update(name,password);
        return "redirect:/";
    }

}
