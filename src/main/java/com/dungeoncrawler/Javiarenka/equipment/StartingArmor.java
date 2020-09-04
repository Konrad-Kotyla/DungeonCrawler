package com.dungeoncrawler.Javiarenka.equipment;

import com.dungeoncrawler.Javiarenka.character.HeroClass;

import java.util.ArrayList;
import java.util.List;

public final class StartingArmor {
    public static List<Armor> ALL_STARTING_ARMOR = new ArrayList<>();
    public static final Armor CLOTH_ARMOR = new Armor("Cloth Armor",List.of(HeroClass.WIZARD, HeroClass.ROGUE, HeroClass.HEALER),5,10, 4);
    public static final Armor LEATHER_ARMOR = new Armor("Leather Armor", List.of(HeroClass.ARCHER, HeroClass.ROGUE, HeroClass.WARRIOR), 8,20, 10);
    public static final Armor RUSTED_CHAIN_ARMOR = new Armor("Rusted Chain Armor", List.of(HeroClass.KNIGHT, HeroClass.WARRIOR, HeroClass.ARCHER), 12,30, 15);

    private StartingArmor() {

    }
}
