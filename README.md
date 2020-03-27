# uft-terminal-emulator-rte
This UFT test is a working example of a terminal emulator script.

This UFT test is a working example of a terminal emulator script. It runs against Reflection, as installed and configured on NimbusClient. I have also attached a document on how to setup/configure UFT to work with terminal emulators. Note that In UFT, the add-in is RTE.

This example depends upon having the Reflection terminal client installed and configured, and a terminal server emulator installed. In the first action that is called, the UFT code ensures that there is exactly one copy of each of these programs running, by executing this VBScript code:

``` vbscript
SystemUtil.CloseProcessByName "term_serv.exe" 
SystemUtil.CloseProcessByName "Attachmate.Emulation.Frame.exe"

SystemUtil.Run "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server\term_serv.exe", "", "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server"
SystemUtil.Run "C:\Users\demo\AppData\Local\Micro Focus\RSC\Reflection Flight.rd3x"
```

If the executables used in the SystemUtil.Run commands are installed on a different path than these hard coded value, you will have to modify the test before you can successfully replay.
