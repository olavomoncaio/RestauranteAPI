package br.com.springapi.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springapi.springbootapi.entity.Pizza;
import br.com.springapi.springbootapi.repository.PizzaRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/pizza")
public class PizzaController {
    @Autowired
    private PizzaRepository _pizzaRepository;

    @GetMapping
    public List<Pizza> Get() {
        return _pizzaRepository.findAll();
    }

    @PostMapping
    public Pizza Post(@Valid @RequestBody Pizza pizza)
    {
        return _pizzaRepository.save(pizza);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pizza> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Pizza newPizza)
    {
        Optional<Pizza> oldPizza = _pizzaRepository.findById(id);
        if(oldPizza.isPresent()){
            Pizza pizza = oldPizza.get();
            pizza.setNome(newPizza.getNome());
            _pizzaRepository.save(pizza);
            return new ResponseEntity<Pizza>(pizza, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Pizza> pizza = _pizzaRepository.findById(id);
        if(pizza.isPresent()){
            _pizzaRepository.delete(pizza.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}