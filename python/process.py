s = ""
with open("./data.csv") as f:
    s = f.read()

res = []
sl = s.splitlines(keepends=True)
for l in sl:
    if "`" in l:
        continue
    res.append(l)

with open("./new.csv", "w") as out:
    out.write("".join(res))