gg.alert("Youssef")
function HOME()
MN = gg.choice({
"🏃Speed Hack🏃",
"🗼ANTENA HEAD🗼",
"⛰Whall Hack Stone⛰",
"🌌Night Mode🌌",
"😵FUNNY MOD😵",
"✒MAKE SCRIPT LIKE ME✒",
"😢HELP",
"〘〘〘❌ ᎬxᎥᏆ ❌〙〙〙",

  }, nil,os.date("🚫       Free Fire 1.54.x        🚫\n      ═══════════════\n┏➤ 🎮Creator : ETHIO GAMER\n |-➤ 📅Date      : %A,%d %b %Y\n┗➤ ⏰Time     : %H:%M%p\n"))
	if MN == nil then
else
if MN == 1 then a1()end
if MN == 2 then a2()end
if MN == 3 then a3()end
if MN == 4 then a4()end
if MN == 5 then a5()end
if MN == 6 then a6()end
if MN == 7 then a7()end
if MN == 8 then EXIT()end
end
AUTOSC = -1
end

function a1()

gg.setSpeed(3.0)
gg.toast("💡speed hack ON💡")

end

function a2()

gg.setRanges(gg.REGION_ANONYMOUS)
gg.searchNumber("73r;6Cr;20r;35r;00r;00r;80r;3Fr::8", 1)
gg.getResults(1000)
gg.editAll("73r;6Cr;20r;35r;9Ar;19r;34r;43r", 1)
gg.clearResults()
gg.searchNumber("E9r;C5r;4Ar;35r;00r;00r;80r;3Fr::8", 1)
gg.getResults(1000)
gg.editAll("E9r;C5r;4Ar;35r;9Ar;19r;34r;43r", 1)
gg.clearResults()
gg.toast("💡ANTENA HACK ON💡")
end

function a3()

gg.setRanges(gg.REGION_C_DATA)
gg.setRanges(gg.REGION_CODE_APP)
gg.searchNumber("BDr;37r;86r;35r;BDr;37r;86r;35r;BDr;37r;86r;35r;BDr;37r;86r;35r;E4r;A6r;46r;00r::20", gg.TYPE_BYTE)
--[[ found: 20 ]]
gg.getResults(16)
--[[ count: 16 ]]
gg.editAll("C9r;3Cr;8Er;BFr;C9r;3Cr;8Er;BFr;C9r;3Cr;8Er;BFr;C9r;3Cr;8Er;BFr", gg.TYPE_BYTE)
gg.clearResults()
gg.toast("⛰Wallhack Stone ON⛰")
end

function a4()

gg.setRanges(gg.REGION_CODE_APP)
gg.searchNumber(".01;1.0e-6::9", gg.TYPE_FLOAT, false, gg.SIGN_EQUAL, 0, -1)
gg.getResults(198)
gg.editAll("-1", gg.TYPE_FLOAT)
gg.clearResults()
gg.toast("💡NIGHT MOD ON💡")
end

function a5 ()

gg.setRanges(gg.REGION_ANONYMOUS)
gg.searchNumber('300',gg.TYPE_DWORD)
gg.getResults(100)
gg.editAll('9999999',gg.TYPE_DWORD)
gg.setRanges(gg.REGION_ANONYMOUS)
gg.searchNumber('300',gg.TYPE_DWORD)
gg.getResults(100)
gg.editAll('9999999',gg.TYPE_DWORD)
gg.setRanges(gg.REGION_ANONYMOUS)
gg.searchNumber('300',gg.TYPE_DWORD)
gg.getResults(100)
gg.editAll('9999999',gg.TYPE_DWORD)
gg.clearResults()
gg.toast("😲FUNNY MOD ON😲")
end

function a6 ()

gg.alert("i can F E L L that you want to make your own script  like this  and even earn money .so let me help you .a link will be automaticaly copied .search it in your brouser and see how to make your own script and get the value.goooooood  luck coder ", "wow thanks bro")
gg.alert("Link Copied ")
gg.copyText("http://youtu.be/vlJQdQw13Qg")
end

function a7 ()
gg.alert ("if you have any questions or need any help I am ready to help you can get me on telegram the link will automaticaly copied. ❌Warring don't say hi just tell what you want.     goooooood  luck coder🙄.")
gg.alert("Link Copied ")
gg.copyText("http://t.me/DTMAZE")
end


function EXIT ()
  print("🇪🇹ETHIOPIA FOR EVER 🇪🇹")
  print ("😄Thanks For Using ETHIO GAMER SCRIPT😄")
  gg.skipRestoreState()
  gg.setVisible(true)
  os.exit()
end
while true do
  if gg.isVisible(true) then
    AUTOSC = 1
    gg.setVisible(false)
  end
  if AUTOSC == 1 then
    HOME()
  end
end
