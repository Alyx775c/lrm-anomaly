local UserInputService = game:GetService("UserInputService")
local EmoteEvent = game.ReplicatedStorage.Alyx.EmoteEvent

UserInputService.InputBegan:Connect(function(input: InputObject)
	if input.KeyCode == Enum.KeyCode.Space then
		EmoteEvent:FireServer()
	end
end)
