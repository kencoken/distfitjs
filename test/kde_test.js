var distfit = require("../lib/distfit");
var KDE = distfit.KDE;
var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

var data = [ 107.850594727032
,85.0887875647773
,87.0742509314661
,106.474282723135
,103.274755450043
,110.412089733777
,114.458575331098
,80.7604452310782
,106.160675804322
,97.4862069011775
,104.908280673258
,96.2046639305932
,116.592604588158
,70.266962809018
,105.714009523146
,109.476025052667
,82.8339980477652
,139.858185100964
,59.5500805601429
,95.4382112266699
,77.7437545380457
,91.9667159928709
,103.934032271263
,97.5035553662737
,94.6126708823996
,100.339598217205
,107.859607605045
,81.6845692329829
,87.2245971386715
,108.379908032332
,105.966883877364
,100.791971540754
,92.0717564156051
,89.8957603802338
,125.271824586474
,135.332266689728
,83.8516675002142
,106.777429214765
,86.853685603382
,86.802277539197
,109.107806153947
,87.401948060106
,88.0633331037538
,100.492358637562
,111.815027369699
,98.5872780263418
,109.354669436656
,100.386524926397
,88.1504945336389
,90.7487250335455
,90.6312925128792
,110.19933169431
,78.0019578647556
,85.1140095041577
,111.025165591467
,103.059304182496
,102.803195583848
,90.9133985724558
,100.537408262733
,106.183455213636
,96.2867354801675
,114.786483048124
,79.8142608131924
,87.4481483165535
,114.567039928452
,99.9380356436193
,123.139834555949
,70.6843661197933
,92.6390619426124
,88.0777572601294
,86.9431416328596
,89.3053476003433
,80.7731231523285
,75.3056967926323
,86.7096521245359
,109.275839963566
,96.2293949880495
,87.3260481004777
,113.348637021553
,95.6468212048224
,110.351966617942
,96.7673673390169
,89.6458112106428
,82.7141509842704
,106.272287975554
,124.381219275697
,100.830586121482
,87.9407743468466
,89.6940037529989
,105.832576039951
,100.247889396859
,74.2704252413191
,109.026725983621
,93.4529618542228
,115.44935972158
,104.748787116369
,102.635108320376
,92.3789338377027
,100.091385316538
,73.4317798692158
,110.366756071063
,95.4438913925386
,108.018617298747
,110.105509179563
,85.4886797748674
,109.887270685532
,90.7037750924239
,105.738600921851
,111.809653242854
,96.069846497513
,84.3794461386727
,123.850908166339
,89.1864227427571
,98.3020842022628
,114.234618837188
,113.624884981963
,68.7984144945841
,71.6133420680718
,121.779547383333
,95.7569052128356
,110.213571070114
,94.8119716732201
,106.056792522307
,108.064417749538
,114.655584059605
,73.6036019118785
,89.5182520899028
,97.8860796905452
,79.875930809541
,86.9765446071017
,101.070981741049
,86.218302725332
,101.148217608352
,111.812709539746
,121.023430254141
,105.654038294513
,91.8465032829877
,97.9440111923955
,134.773728207269
,85.1870867750015
,114.13100132885
,105.112568813629
,92.5577981927696
,101.525323086126
,95.1899757964919
,117.613954077113
,117.291073663062
,88.6939361002234
,111.674591466614
,68.5834507942602
,82.667906193229
,91.1496346179907
,92.9046326936239
,104.670003102949
,96.5198528480921
,113.066222903552
,106.456591010674
,98.4862799347356
,97.3175292108984
,80.6377620118532
,99.2562617753155
,96.1858168939085
,107.706649447805
,88.6565708442142
,98.4664975787343
,118.912480983266
,113.690655516469
,86.362792034987
,121.155639391137
,115.69032286599
,92.6542579740053
,125.123831794991
,106.213524217902
,93.1399511139282
,82.3562113052565
,89.4349460697464
,98.4928068621599
,109.040991418961
,96.1406878984619
,116.443570598935
,123.819421099207
,102.583311081436
,74.6977232461597
,107.748122723897
,100.038771559932
,114.258617524146
,94.4313022012463
,103.379242171864
,85.7782750754346
,90.9605882617327
,97.2475035974755
,114.06356616831
,112.21271676522
,118.144621270152
,116.182702358571
,90.3603298015101
,75.1152158239977
,88.8591834354464
,91.9324919673974
,83.8219223870369
,96.024188196515
,102.72254144827
,90.5962590951176
,110.281283051404
,114.976433120037
,99.4065125970786
,76.6324273537789
,95.2057084901842
,115.386706051095
,83.2959921915023
,83.2500938420067
,105.731049283093
,114.384975660009
,98.7880388250547
,94.6187678649095
,104.190217960848
,91.9824727446839
,109.492033439809
,90.93586348031
,113.591461633874
,106.809265158333
,98.767454083859
,76.9576931398536
,96.7305950123918
,96.9617651444098
,92.2566835242128
,93.5407328941547
,83.5098930552242
,91.9763661565913
,78.7243544491104
,93.4771034926417
,112.658036301206
,80.6254937106122
,86.242172317524
,57.904514754798
,98.2843450315502
,70.0927518842085
,108.860278482537
,103.05555539299
,66.3690281892428
,86.5381524511154
,90.8046645535748
,80.4513851408247
,113.289057020077
,53.6241114999056
,83.4395980288264
,91.3887537571234
,124.663003939461
,90.5615503983192
,105.832763529316
,77.1160216940518
,68.3256730681136
,94.8649317368269
,100.333649819677
,99.5126052050403
,90.8622562930875
,92.6791686515967
,104.031172390972
,93.1244034703374
,107.315755476158
,91.4668552672121
,100.877650071086
,85.65100494259
,96.7460172526253
,94.251043640439
,83.4781593678747
,129.146259020915
,106.058065398251
,113.976910394543
,88.6601481858382
,102.129560260633
,90.8707519565597
,108.116730312523
,98.8379551497493
,91.5966037989905
,90.5794508538067
,100.330689570513
,88.4755782761076
,116.49343122844
,91.3445965999712
,108.654955893499
,117.489975859175
,104.639528338055
,91.9162659072367
,96.2624609564377
,100.214785959169
,111.334288141626
,78.1383051775898
,134.03170656763
,110.892278773363
,124.344207019839
,96.7723273718032
,85.5802709253859
,94.3443023923147
,87.2136644178671
,93.6208407436908
,96.7403295307625
,116.999099638416
,71.0923920196752
,81.0392170939968
,84.0326002595542
,116.514416667554
,124.214680065944
,89.2260627325725
,96.8774525598812
,101.711642644775
,105.316155295443
,119.993140495225
,116.918245829797
,109.725325274735
,98.606964656625
,100.856438391306
,111.126414577989
,118.534192059299
,110.550306587155
,95.3179106544514
,90.7588960877219
,70.3046813563455
,99.4922895895003
,107.066172686737
,99.0911214262128
,106.830143097308
,102.307791305043
,74.029191786772
,114.387204118886
,101.485189154551
,94.3295323389357
,117.076326290346
,130.348770081138
,110.611625942986
,95.3360571963222
,112.695674553505
,103.487670666583
,80.6463568539822
,90.0534740004203
,99.4471553252253
,78.6146305992035
,103.845979781866
,88.20837458408
,76.7139284886884
,80.6680037257791
,121.347024767662
,109.557288731321
,95.2056489297217
,113.256146330474
,102.396687348599
,89.9658708491417
,94.6803438292851
,121.32117008779
,121.6655771052
,134.923371346382
,95.0453769881091
,106.89565496122
,91.4574141289797
,83.9065254583714
,98.0566822887346
,86.0034563237961
,99.2215582243268
,77.7967255881263
,111.232798238592
,98.5198107154838
,94.1801109026288
,117.57915461767
,85.9045087247146
,104.532375209154
,108.204531679931
,117.559865944425
,101.431946160312
,81.9443441570488
,97.2014633313081
,102.257346363935
,79.6936200242808
,87.162621935601
,107.86217010629
,114.13955581349
,105.345703425995
,115.102348909697
,109.724507901447
,111.13058545765
,87.4737869469081
,93.4624931487499
,80.0670737876959
,79.6697238908551
,105.197478632886
,113.985708874474
,93.9181718306747
,113.697648993655
,109.332070989448
,98.4634332055762
,104.974531438293
,88.6621244458389
,110.147720557747
,82.0604356751034
,73.1251939634314
,101.377689453255
,112.156106739548
,92.9732071958559
,102.036697425992
,108.198048691512
,102.357113848792
,80.4482296105326
,94.2760121268081
,115.907612485636
,86.8365352249592
,105.305873257667
,112.951872289066
,116.054387456902
,135.124263061593
,76.2343498154828
,100.957307966355
,95.2570693954381
,115.979252588759
,107.750404733605
,103.705275922369
,94.2270545598949
,86.7004550982704
,88.6882471307749
,114.336274518883
,90.3816108701532
,110.270042921719
,105.703744003527
,113.496748753887
,103.454048339373
,82.2003305501202
,84.9128662959916
,81.3086796640676
,126.848719906966
,74.9538266564719
,109.739862636536
,101.621005025438
,98.9893460081797
,97.7578888293731
,125.741849909996
,101.185354318761
,81.1100614100106
,118.392325195204
,114.829806693846
,91.2834543577806
,107.323218231451
,96.009752920915
,115.654296632379
,108.68632482269
,117.659033922723
,89.2862809038687
,104.372095965618
,100.938076051148
,64.8526083177125
,135.692064390816
,82.1917711534089
,93.7575943165393
,121.269753829704
,105.985148950646
,83.2053167697661
,115.717168081272
,108.145219387199
,92.0353429074698
,102.942313289509
,83.0648986340738
,109.054325701544
,104.057898685152
,104.887498282685
,125.62008734346
,100.793476115102
,111.275873915146
,108.810789361373
,119.974910276257
,124.771875515857
,99.3181756941331
,82.5187067186589
,110.60517160758
,84.5323183492968
,104.850647111113
,91.8147292014636
,103.928294372272
,114.980139782485
,84.284081777311
,121.147296961809
,103.26224820431
,99.8649553914707
,102.461392346641
,107.692672831323
,84.8012983577654
,105.34774854675
,94.2125310096127
,83.1384031006013
,108.158954651071
,108.488931785162
,119.439625825512
,106.396504843857
,77.5577078469459
,122.829253166182
,100.239193205069
,113.07751470841
,110.498060699768
,91.914910054228
,80.2919555967602
,64.8552015977317
,94.3998765423345
,100.894757070117
,48.4099355323303
,51.5715341612431
,55.3257658868924
,40.4039435366051
,66.3006470482982
,47.0875201224628
,78.3550671513042
,56.2530180728187
,46.6857348030395
,48.8356291178204
,37.4136511977617
,51.2085265992612
,43.5963052243589
,41.8193054900571
,61.7712258137065
,59.2037612306514
,53.6897239089928
,45.7022719614577
,39.8061142723836
,76.2369234919092
,55.2659908038171
,32.5151352384071
,50.2846405644559
,40.4872110066792
,41.1968996815261
,50.3424485851753
,86.8182698402106
,53.750240450607
,54.2538539293711
,60.7642328856685
,51.9423962828028
,53.706358418818
,55.0979660188445
,51.7745194559331
,49.7524098248077
,43.440129965053
,46.4200667384312
,39.5692025046568
,44.7550418126524
,75.2472368627868
,72.9732511778154
,45.4128668909301
,56.1267481182845
,62.0704212179022
,55.8872208973089
,57.2632485252027
,59.9312439396675
,67.8185155028516
,48.2058834997469
,49.149158226196
,38.5336387390666
,53.6114212949728
,74.6815640249803
,63.2169187037828
,47.3925076427786
,48.1524988014239
,41.8874397966685
,37.3456684312645
,31.139394979596
,47.6175443166685
,39.7227204587682
,57.2660606879845
,43.7165396746789
,39.9867864522659
,41.8298951683676
,66.1760276494192
,33.6105948049524
,51.4875977645194
,43.000941225564
,54.9062112103302
,48.1909794943826
,55.848716129583
,47.9580063340986
,53.973622416206
,67.2451908722011
,52.1462686430418
,60.7557028517929
,37.0786446750441
,32.7782827910905
,22.6884897945716
,47.4951341778247
,55.9577995613822
,44.8357675107486
,46.9816589891261
,52.2255397783057
,42.2567977960968
,59.0947081192789
,43.3688524928699
,42.6446569411521
,38.1353411773243
,44.2263556060454
,38.3646550335047
,59.2054388962886
,42.8755999106203
,43.9761927928872
,46.1347787922516
,52.8435850177323
,52.16147017091
,44.3862184569218
,54.9075386036161
,48.6897079358895
,51.6695080065742
,73.6615624841576
,47.2505459893544
,48.0104826990994
,54.9024320583818
,67.2223815869269
,63.1798003636849
,51.9918790580439
,46.348399118409
,52.0559860027995
,36.7613051936294
,34.920055138034
,37.3327126337426
,49.8520102929017
,44.1564816698866
,45.5983159380551
,41.3033712347686
,56.100473456818
,67.5001027780842
,53.3633035158156
,45.6779712446782
,48.1177938415863
,42.7014431125534
,55.494210017451
,65.825285421293
,48.3574146270947
,44.0258944432889
,50.7456958335164
,49.0218027920421
,40.9910202936517
,51.3187347188406
,48.3051730883759
,61.0950281241832
,54.1179025390688
,40.4993781249323
,68.8091521013822
,55.8994337884123
,54.0016937002801
,79.7152019129494
,61.3208627352205
,46.0005744112253
,67.9869016632466
,34.524825351576
,70.1231113906004
,47.6834149490336
,48.222715989494
,39.7909443281874
,37.8491619790257
,52.1113414541376
,52.2119450742679
,26.3438083232136
,41.4341808761085
,32.2920285479624
,51.6847097764973
,45.9837846090286
,36.6341851821248
,55.5104150932606
,25.07727387994
,44.8938895666593
,55.9013183975514
,45.8070266984151
,60.2467859127866
,47.0233852922504
,56.4272605349802
,36.7373774172405
,51.1513118656157
,41.9887497606148
,60.510200131689
,45.3111488996893
,47.9736013332705
,59.054824573878
,72.0010288550628
,46.2545037945673
,49.1375502920193
,57.3885342018259
,53.4145902254672
,65.8599204174392
,41.690342241777
,47.5387068852111
,51.3957411502317
,50.673126593669
,57.6540775636407
,53.7196451156296
,77.8512399235911
,56.3529259782875
,34.4708043523902
,45.6349405475496
,37.940686168903
,37.2384987458508
,36.1730154284676
,44.556385679582
,48.0697054458195
,50.2004175794255
,38.5292701731407
,54.1142204185749
,33.9405152342349
,43.2745605706131
,43.4849329560284
,54.9200250035658
,28.7436170948716
,48.0554628139188
,58.8608065048709
,62.3679920493613
,53.0458189901463
,49.6026678998544
,54.6823658378269
,56.1339449219307
,55.5638904534475
,46.7238451257945
,58.8663960193577
,61.2977543449576
,71.0137440970939
,39.6016089904253
,67.4802800734143
,39.608258517412
,37.1108904765929
,35.5576594555256
,50.0133451109885
,58.5454180876366
,60.9714061875039
,71.4530303914092
,46.9537790475264
,64.3340580204228
,43.7531334555038
,56.6768961895486
,45.0077765502944
,62.9447099866265
,51.1642711459532
,59.1371914049703
,42.9286849238674
,75.5216027317344
,55.0021020896002
,69.1311465531998
,58.0601319475099
,34.3833958257901
,41.5176465663397
,30.8829230395228
,48.802256463411
,48.8032028194869
,49.2694915166594
,52.070449302156
,44.3863041878679
,65.6844369887811
,49.2288118598506
,40.6974332952637
,34.9871787883567
,40.1304298051138
,57.7873836397365
,34.0912537844521
,44.3152767851357
,46.9071486657393
,51.471712137412
,51.2932437262288
,55.3315305841127
,34.5648964822803
,57.2516188555951
,45.3403405888273
,23.8257690932621
,83.0585424247451
,50.7784080419552
,36.6074986914218
,42.1266431082679
,51.5276110641127
,40.5753126676056
,49.513285445475
,48.6546709466224
,45.1414427812913
,40.4197161781668
,53.1255688698499
,71.2949312748407
,56.0216383414886
,44.5706713948475
,59.3965866860912
,61.8129856041549
,69.5468176775932
,49.5054998485931
,50.202986874287
,68.8255245645183
,43.0943094778862
,54.042341511953
,30.5554944962088
,55.4895230782683
,37.4395799401327
,50.3453566470777
,49.2662626033279
,50.4508226520478
,41.0777009839338
,31.6191526501709
,47.2510330786783
,55.813673432571
,59.5432579977422
,53.5005085208113
,53.281532730456
,71.0049404799437
,55.1855273058637
,46.7824453582547
,58.0224196424358
,46.6825802645557
,45.3287534031694
,47.7840030716939
,46.3792332207941
,37.5694916270368
,48.4355151113059
,45.4391441509386
,64.0485958145924
,56.1853308563552
,36.4500924403207
,72.7267077736606
,51.0138453958556
,47.7931138217224
,61.9290357357437
,59.6745782511352
,31.8167120711889
,41.9097404890969
,45.5115059565661
,57.3360299520162
,45.6277573509889
,57.4258476365481
,37.1401629204627
,50.6502835785431
,44.6254772666529
,42.5431925033572
,55.0861986414396
,67.5323934093984
,58.4214843044834
,39.5774843836497
,46.4315327343716
,31.0897757373338
,53.1729270723077
,40.8711321039193
,51.9196823861661
,67.5817033023251
,48.9142452967312
,58.339790022869
,50.6392235209663
,46.3594996121911
,50.0067848346943
,65.0043334824259
,46.8796625306077
,61.6292683615179
,55.2984833699713
,42.4430364018532
,45.0255630990555
,49.6754412534794
,51.001637241179
,42.4318426458951
,64.8455797752282
,62.7422720185747
,42.2891938162462
,51.9006627334975
,56.517436244965
,48.2173456649513
,57.8295018357477
,50.9837093816619
,45.8936153348495
,53.4851838949268
,39.0219170499389
,74.3097169010485
,37.8401507449764
,44.407950475485
,46.4163505013277
,73.9225619025934
,66.5684000330255
,39.9177444212303
,62.0035535111317
,46.3509344360256
,50.0159950027492
,44.5270929998962
,43.0947175383148
,39.5167661637846
,49.9176461553587
,40.4633149201141
,56.3727859476938
,52.8787117377187
,71.7381615056458
,35.3533951764022
,52.3060862426393
,46.1885335119925
,46.700181200433
,60.9588449307439
,36.4499509485607
,43.7293759706588
,43.9973114996191
,60.7134797002233
,42.9715266170237
,45.3137332188442
,55.4540941147923
,37.7217767481761
,50.1550312104492
,62.707172394345
,42.0426580092428
,42.8698018613813
,51.2355498727506
,58.7272312415005
,50.0469009180546
,48.4038402903601
,63.3462473106582
,39.5080633025096
,55.2227512470543
,59.7795600247472
,51.0957005020647
,52.35662017839
,45.067962633328
,54.9173802040678
,56.382489147607
,37.6122306344112
,60.8317494558992
,50.8400648332267
,28.064970750232
,45.5095742517338
,46.9148574523354
,60.8050835195533
,33.2193492261834
,32.9892168752418
,50.6002437507794
,39.784660576318
,44.0410533053444
,47.8842272313223
,56.8571897478301
,42.6724848923402
,56.1117388612545
,33.5097124775354
,50.9855731867936
,42.910211785414
,69.0837644783157
,71.3076169527181
,48.3201438432041
,64.7514967329106
,61.1723815494416
,68.7585315948298
,67.2760348352639
,45.8940381393272
,44.8748172535729
,48.8792793858114
,52.1098526897692
,42.6683138315228
,36.9053175202136
,34.9730458348965
,45.4958032754667
,47.1788039067562
,36.2868624115544
,54.6529059752681
,59.7595708273576
,52.2811784904074
,53.0015294126135
,43.8185753057855
,45.5275572406473
,40.5981180208152
,42.8842446938798
,33.5748860899485
,53.2782416875019
,45.3504422335336
,37.1860432943975
,52.2199058636367
,44.2921476716756
,43.0961837659201
,39.8880356761278
,55.5636421425417
,66.1907440625626
,50.2223739864915
,60.6309828452722
,54.3714512414803
,27.6228187394811
,64.0539042072145
,42.4225069808994
,56.4364417122889
,63.1778406112559
,50.8632465022032
,35.113582731394
,34.8674670173177
,73.9307594136098
,58.4465627512311
,55.0795978761316
,44.7965039973224
,69.1267500469953
,59.1196801058803
,57.7325850404224
,75.2856358459113
,36.6050382234798
,47.3420072275465
,49.0766044786341
,48.0032841998594
,45.029401214626
,58.5748799321696
,69.2331681035311
,49.6323125796777
,46.2325016958604
,51.5897138047726
,49.8411232338504
,45.5162852425905
,48.0207711249381
,37.5390503817568
,34.6068264633995
,37.6673592879077
,75.1854007751438
,48.6421666087395
,39.9585168100164
,62.6904107858255
];

describe("Kernel Density Estimation Test", function() {
  describe("Gaussian Kernel Test", function() {
    var KDE = distfit.KDE;
    var kdfit = new KDE.KDEDist(KDE.Kernel.Gaussian, data);
    it("should be non-degenerate", function() {
      expect(kdfit.pdf(Math.random())).to.be.above(0);
    });
  });
});
