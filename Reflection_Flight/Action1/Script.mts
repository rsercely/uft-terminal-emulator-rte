﻿' Start by closing down any stray processes that we want to start next
SystemUtil.CloseProcessByName "term_serv.exe" @@ hightlight id_;_787918_;_script infofile_;_ZIP::ssf120.xml_;_
SystemUtil.CloseProcessByName "Attachmate.Emulation.Frame.exe"

' Start our Flight 3270 Demo app and the Reflections connection to it
SystemUtil.Run "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server\term_serv.exe", "", "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server"
Window("3270/5250 server").Minimize
wait 2
SystemUtil.Run "C:\Users\demo\AppData\Local\Micro Focus\RSC\Reflection Flight.rd3x"
wait 8

' Login
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("USERID").Set "mercury" @@ hightlight id_;_1536_;_script infofile_;_ZIP::ssf28.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("PASSWORD").SetSecure "5d5469e9989528086fd38a5daac53402ca589e6e" ' PW = mercury @@ hightlight id_;_1616_;_script infofile_;_ZIP::ssf29.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("PASSWORD").SetCursorPos 7 @@ hightlight id_;_1616_;_script infofile_;_ZIP::ssf30.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").SendKey TE_ENTER @@ hightlight id_;_8436_;_script infofile_;_ZIP::ssf31.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").Sync
TeWindow("TeWindow").TeScreen("LOGON MERCURY").TeField("LOGON MERCURY INPUT").Set "cicsv" @@ hightlight id_;_1762_;_script infofile_;_ZIP::ssf32.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").TeField("LOGON MERCURY INPUT").SetCursorPos 5 @@ hightlight id_;_1762_;_script infofile_;_ZIP::ssf33.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").SendKey TE_ENTER @@ hightlight id_;_6710_;_script infofile_;_ZIP::ssf34.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").Sync

