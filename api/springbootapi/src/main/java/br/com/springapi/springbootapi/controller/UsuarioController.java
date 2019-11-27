package br.com.springapi.springbootapi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springapi.springbootapi.entity.Usuario;
import br.com.springapi.springbootapi.repository.UsuarioRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioRepository _usuarioRepository;

    @GetMapping
    public List<Usuario> Get() {
        return _usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario Post(@Valid @RequestBody Usuario usuario)
    {
        return _usuarioRepository.save(usuario);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Map<String, Object> usuario)
    {
        String email = (String) usuario.get("email");
        String senha = (String) usuario.get("senha");
        List<Usuario> userList = _usuarioRepository.findByEmailAndSenha(email, senha);
        if(!userList.isEmpty()){
            Usuario foundUser = userList.get(0);
            Map<String,Object> response = new HashMap<String,Object>();
            response.put("nome", foundUser.getNome());
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.notFound().build();        
    }
}