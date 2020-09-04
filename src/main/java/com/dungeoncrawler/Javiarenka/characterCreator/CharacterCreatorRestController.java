package com.dungeoncrawler.Javiarenka.characterCreator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class CharacterCreatorRestController {
    CharacterCreatorService service = new CharacterCreatorService();

    @GetMapping("/charClassToArmor/{className}")
    public Set<String> getAvailableArmors(@PathVariable String className) {
        return service.getCharacterClassToAvailableArmor().get(className.toUpperCase());
    }

    @GetMapping("/charClassToWeapon/{className}")
    public Set<String> getAvailableWeapons(@PathVariable String className) {
        return service.getCharacterClassToAvailableWeapon().get(className.toUpperCase());
    }
}