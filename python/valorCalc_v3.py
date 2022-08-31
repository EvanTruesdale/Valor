import numpy as np
import matplotlib.pyplot as plt

energyPos = 10
energyNeg = 10
targetSuccesses = 2
sampleSize = 10**5
#       d4 d6 d8 d10 d12
dice = [4, 6, 8, 10, 12]
dPos = [0, 0, 0, 0,  4]
dNeg = [0, 0, 0, 2,  0]

dPosString = ''
for i in range(len(dPos)):
        if dPos[i]>0:
            dPosString += str(dPos[i])+'d'+str(2+2*i)+' '
if len(dPosString) == 0: dPosString = '0 '

dNegString = ''
for i in range(len(dNeg)):
        if dNeg[i]>0:
            dNegString += str(dNeg[i])+'d'+str(2+2*i)+' '
if len(dNegString) == 0: dNegString = '0 '

rng = np.random.default_rng()
posMat = {}
negMat = {}
for i,d in enumerate(dice):
    posMat[str(d)] = rng.integers(low=1, high=d+1, size=(sampleSize, dPos[i]))
    negMat[str(d)] = rng.integers(low=1, high=d+1, size=(sampleSize, dNeg[i]))

posSucc = {}
for d,rolls in posMat.items():
    successArr = []
    for roll in rolls:
        sEnergy = energyPos
        successes = 0
        for die in roll:
            if die > 3:
                successes+=1
            elif die > 2 and sEnergy > 0:
                successes+=1
                sEnergy-=1
        successArr.append(successes)
    posSucc[str(d)] = successArr

negSucc = {}
for d,rolls in negMat.items():
    successArr = []
    for roll in rolls:
        sEnergy = energyNeg
        successes = 0
        for die in roll:
            if die > 3:
                successes+=1
            elif die > 2 and sEnergy > 0:
                successes+=1
                sEnergy-=1
        successArr.append(successes)
    negSucc[str(d)] = successArr

netSuccAll = np.zeros(len(posSucc[list(posSucc.keys())[0]]))
for d in posSucc.keys():
    netSucc = np.array(posSucc[d]) - np.array(negSucc[d])
    netSuccAll += netSucc
threshCount = len(netSuccAll[netSuccAll>=targetSuccesses])
total = len(posSucc[list(posSucc.keys())[0]])
hitProb = threshCount/total

counts = np.arange(netSuccAll.min(), netSuccAll.max()+1, 1)
probs = np.zeros(len(counts))
for i,count in enumerate(counts):
    probs[i] = len(netSuccAll[netSuccAll>=count])/total
bins = np.arange(netSuccAll.min(), netSuccAll.max()+2, 1)

fig, ax = plt.subplots(1,1)
ax.hist(netSuccAll, bins, align='left', label=probs, density=True, cumulative=-1)
for prob, x in zip(probs, bins):
    ax.annotate('%0.2f%%'%(prob*100), xy=(x,0), xycoords=('data', 'axes fraction'), xytext=(0,-20),
                textcoords='offset points', va='top', ha='center')
ax.set_title('Probability of n Successes or Greater')
ax.set_ylabel('Probability')
ax.set_ylim([0,1])
ax.set_xlim([counts[0]-0.5, counts[-1]+0.5])

name = 'valorCalc_v3_plot.png'
plt.savefig(name, dpi=200)
