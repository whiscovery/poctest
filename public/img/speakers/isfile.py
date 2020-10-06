import os.path
import shutil

speakers = ["Hubris.png","HuiYuWu.png","Hyunuk.png","i3eat.png","ICBM(ZhaoWei).png","JaanYeh.png","Jasiel.png","JasielSpelman.png","JeffChao.png","Jerry.png","JianyuChen.png","JohnC.Matherly.png","JonasZaddach.png","K-dupe.png","Kibom.png","LiFu.png","linz.png","Linzi.png","Loafers.png","LuigiAuriemma.png","MariaGarnaeva.png","MarionMarschalek.png","Matt.png","MC.png","MichealSutton.png","Mudsplatter.png","Nafiez.png","NedWilliamson.png","NiekTimmers.png","OlegBroslavsky.png","PatrickPaumen.png","PatrickWardle.png","PauloShakarian.png","PeterSekan.png","PetrSvenda.png","QianChen.png","QidanHe.png","Radityalryandi.png","RoyceLu.png","Ryan.png","RyanSherstobitoff.png","SaiCheng.png","SamuelGross.png","SandroGauci.png","SCADAStrangeLove.png","ShengbaoCai.png","ShinjoPark.png","ShuaitianZhao.png","SuYongKim.png","TapWan.png","TimYunusov.png","Tombkeeper.png","UK.png","VladimirKropotov.png","WeiXiao.png","WeiYan.png","YanZhang.png","YangDai.png","YangQing.png","YangZhang.png","YarBabin.png","YeZhou.png","YeongsikMoon.png","YuPan.png","ZhangLu.png","ZhiyangZeng.png","ZuotongFeng.png"]

for speaker in speakers:
	name = speaker
	file = "./" + str(name).replace(" ", "")
	print(file)

	if os.path.isfile(file):
		print("There is a file")
		
	else:
		src = "./hacker.png"
		dst = file
		shutil.copy(src, dst)
	
		
