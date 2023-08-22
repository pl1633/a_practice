package hello.springmvc.basic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class MappingController {
    private Logger log = LoggerFactory.getLogger(getClass());

    @RequestMapping("/hello-basic")
    public String helloBasic(){
        log.info("helloBasic");
        return "ok";
    }

    @RequestMapping(value="/mapping-get-v1", method = RequestMethod.GET)
    public String mappingGetV1(){
        log.info("mappingGetV1");
        return "ok";
    }

    @GetMapping(value="/mapping-get-v2")
    public String mappingGetV2(){
        log.info("mappingGetV2");
        return "ok";
    }

    @PutMapping(value="/mapping-put")
    public String mappingPut(){
        log.info("mappingPut");
        return "ok";
    }

    // PathVariable(경로 변수) 사용
    // 변수명이 같으면 생략 가능
    // @PathVariable("userID") String UserID -> @PathVariable userID

    @GetMapping("/mapping/{userId}")
    public String mappingPath(@PathVariable("userId") String data){
        log.info("mappingPath userId={}",data);
        return "ok";
    }

    @GetMapping("/mapping/users/{userId}/orders/{orderId}")
    public String mappingPath(@PathVariable("userId") String userId,@PathVariable("orderId") String orderId){
        log.info("mappingPath userId={}, orderId={}",userId,orderId);
        return "ok";
    }

    // 특정 파라미터 조건 매핑
    //
    // 파라미터로 추가매핑
    // params="mode"
    // params="!mode"
    // params="mode=debug"
    // params="mode!=debug" (! = )
    // params = {"mode=debug,"data=good"}


    @GetMapping(value = "/mapping-param",params = "mode=debug")
    public String mappingParam(){
        log.info("mappingParam");
        return "ok";
    }

    // 특정 헤더 조건 매핑
    // headers = "mode"
    // headers = "!mode"
    // headers = "mode=debug"
    // headers = "mode!=debug"

    @GetMapping(value = "/mapping-header", headers = "mode=debug")
    public String mappingHeader(){
        log.info("mappingHeader");
        return "ok";
    }

    /**
     * Content-Type 헤더 기반 추가 매핑 Media Type
     * consumes="application/json"
     * consumes="!application/json"
     * consumes="application/*"
     * consumes="*(\ 주석 때문에 작성)/*"
     * MediaType.APPLICATION_JSON_VALUE
     */
    @PostMapping(value = "/mapping-consume", consumes = "application/json")
    public String mappingConsumes() {
        log.info("mappingConsumes");
        return "ok";
    }

    /**
     * Accept 헤더 기반 Media Type
     * produces = "text/html"
     * produces = "!text/html"
     * produces = "text/*"
     * produces = "*(\ 주석 때문에 작성)/*"
     */
    @PostMapping(value = "/mapping-produce", produces = "text/html")
    public String mappingProduces() {
        log.info("mappingProduces");
        return "ok";
    }

    //produce = MediaType.TEXT_PLAIN_VALUE
    // produces = text/plain;charset=UTF-8
}
