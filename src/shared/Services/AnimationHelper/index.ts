import { Variables } from "shared/Variables";

class I_CSAnimationHelper {
	/**
	 * pWipePlay
	 * stands for player wiping play
	 * also freezes the characters HRP
	 * @param animator The animator to load the animation onto
	 * @param animationID
	 * @param looping
	 * @returns Loaded Animation
	 */
	public pWipePlay(animator: Animator, animationID: number, looping: boolean): AnimationTrack {
		let character = animator.Parent?.Parent as Model;
		Variables.PlayersFrozen[character.Name] = true;
		if (character.PrimaryPart) character.PrimaryPart.Anchored = true;

		let animation = new Instance("Animation");
		animation.AnimationId = "rbxassetid://" + animationID;

		for (let [_, anim] of ipairs(animator.GetPlayingAnimationTracks())) {
			anim.Stop();
		}

		let track = animator.LoadAnimation(animation);
		track.Looped = looping;
		track.Play();
		track.Stopped.Connect(() => {
			Variables.PlayersFrozen[character.Name] = false;
			if (character.PrimaryPart) character.PrimaryPart.Anchored = false;
		});

		return track;
	}

	/**
	 * pRestore
	 * restores a player's animation script
	 * @deprecated it doesnt do anything
	 */
	public pRestore(plr: Player) {}
}

const CSAnimationHelper = new I_CSAnimationHelper();

export { CSAnimationHelper };
