package ru.yourname.nodelay.mixin;

import net.minecraft.client.MinecraftClient;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(MinecraftClient.class)
public class MinecraftClientMixin {

    // ⚠️ Названия могут отличаться в 1.21.4
    @Shadow private int rightClickDelay;
    @Shadow private int itemUseCooldown;

    @Inject(method = "tick", at = @At("HEAD"))
    private void removeRightClickDelay(CallbackInfo ci) {
        this.rightClickDelay = 0;
        this.itemUseCooldown = 0;
    }
}
