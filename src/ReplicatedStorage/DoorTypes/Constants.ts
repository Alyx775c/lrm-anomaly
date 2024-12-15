const LINEAR_TWEEN = (t: number) => new TweenInfo(
    t,
    Enum.EasingStyle.Linear,
    Enum.EasingDirection.InOut,
    0,
    false,
    0
)

export { LINEAR_TWEEN }