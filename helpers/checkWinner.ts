// "players": [{"__typename": "Player", "character": "M3", "id": "12288", "isDead": false, "nickname": "Uuu", "role": null}, {"__typename": "Player", "character": "M1", "id": "28992", "isDead": false, "nickname": "7656", "role": null}, {"__typename": "Player", "character": "M3", "id": "40832", "isDead": false, "nickname": "Tytyty", "role": null}, {"__typename": "Player", "character": "M3", "id": "43744", "isDead": false, "nickname": "Chuj", "role": null}, {"__typename": "Player", "character": "M3", "id": "57824", "isDead": false, "nickname": "Iii", "role": null}, {"__typename": "Player", "character": "M3", "id": "69120", "isDead": false, "nickname": "Chuj", "role": null}, {"__typename": "Player", "character": "M3", "id": "69568", "isDead": false, "nickname": "Chuj", "role": null}, {"__typename": "Player", "character": "M3", "id": "83072", "isDead": false, "nickname": "Ooo", "role": null}, {"__typename": "Player", "character": "M1", "id": "87840", "isDead": false, "nickname": "IPhnEmu", "role": null}]

// "gameRules": {"__typename": "GameRules", "additionalRoles": [], "numberOfMafia": 2, "showRolesAfterDeath": false},

export const checkWinner = ({
  players,
  gameRules,
}: any): "mafia" | "police" | null => {
  let mafiaCount = 0;
  let policeCount = 0;
  let citizenCount = 0;

  // Przechodzimy przez wszystkich graczy i zliczamy żyjących mafiosów, policjantów oraz obywateli
  players.forEach((player: any) => {
    if (!player.isDead) {
      if (player.role === "mafia") {
        mafiaCount++;
      } else if (player.role === "police") {
        policeCount++;
      } else if (player.role === "citizen") {
        citizenCount++;
      }
    }
  });

  // Sprawdzenie warunku wygranej mafii
  // Mafia wygrywa, gdy liczba żyjących mafiosów jest równa lub większa od liczby żyjących policjantów i obywateli
  if (mafiaCount >= policeCount + citizenCount) {
    console.log("mafia won");
    return "mafia";
  }

  // Sprawdzenie warunku wygranej policjantów
  // Policjanci (i obywatele) wygrywają, gdy wszyscy mafiosi zostali wyeliminowani
  if (mafiaCount === 0 && policeCount > 0) {
    console.log("police won");
    return "police";
  }

  // Jeśli nikt jeszcze nie wygrał
  console.log("no one won");
  return null;
};
