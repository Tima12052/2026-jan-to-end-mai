package ru.yourname.nodelay;

import net.fabricmc.api.ClientModInitializer;

public class NoDelayMod implements ClientModInitializer {
    @Override
    public void onInitializeClient() {
        System.out.println("[NoDelay] Loaded");
    }
}
