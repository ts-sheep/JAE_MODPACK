const CURSED_RING = 'enigmaticlegacy:cursed_ring'
ServerEvents.recipes(event => {
    event.shaped(
        Item.of(CURSED_RING),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'scguns:treated_iron_ingot',
            B: 'minecraft:redstone_block'
        }
    ).id('jae:cursed_ring_recipe')
})


/*
function addLore(item, loreLine) {
    const line = `["",{"text":"${loreLine}","italic":false}]`
    if (!item.nbt) item.nbt = {}
    if (!item.nbt.display) item.nbt.display = {}
    if (!Array.isArray(item.nbt.display.Lore)) {
        item.nbt.display.Lore = []
    }
    item.nbt.display.Lore.push(line)
}

PlayerEvents.inventoryChanged(event => {
    let item = event.item
    if (item.id == CURSED_RING && item.nbt && item.nbt.needsLore) {
        const { player } = event;
		addLore(item, "§r§4Crafted by: §e" + player.username)
		player.level.playSound(null, player.x, player.y, player.z, "ui.stonecutter.take_result", "players", 1 ,1);
        item.nbt.remove('needsLore')
		
    }
})


ServerEvents.commandRegistry(event => {
	const { commands: Commands} = event
	event.register(
		Commands.literal('cursed_ring_reset')
			.requires(source => source.hasPermission(2))
			.executes(ctx => {
				let player = ctx.source.player
				if (!player) return 0
				delete player.persistentData.hasCursedRing
				player.tell('Reset!')
				return 1
			})
	)
})



ItemEvents.crafted(event => {
     if (event.item.id == CURSED_RING) {
        let player = event.player

        // Nếu đã từng craft rồi
        if (player.persistentData.hasCursedRing) {
            player.tell(Text.red('You can only craft this ring once!'))
			
            // Xoá item vừa craft
            event.item.count = 0
			player.closeMenu()
            return
        }

        // Nếu chưa từng craft
        player.persistentData.hasCursedRing = true
        player.tell(Text.red('YOU CRAFTED THE RING!!'))
    }
})
*/