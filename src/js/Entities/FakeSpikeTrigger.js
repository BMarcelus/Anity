class FakeSpikeTrigger {
  constructor(x,y) {
    this.x=x;this.y=y;
    
  }
  update() {
    var player = this.scene.player;
    if(!player)return;
    var dx = player.x-this.x;
    var dy = player.y-this.y;
    var ds = Math.abs(dx)+Math.abs(dy);
    if(ds<20&&!this.scene.fakinit) {
      this.scene.fakinit = true;
      this.scene.dialogueController.add(GetDialogueData(this.scene,"CurleyFakeSpikeFound"));
    }
  }
}