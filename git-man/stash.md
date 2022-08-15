# git stash

作業中の内容を一時退避させる．

## 作成

`create`はあっても無くても良い．

```
% git stash create
```

## 復帰

```
% git stash apply
```

## 削除

```
% git stash drop
```

## 復帰+削除

`apply`して`drop`するよりこっちのが楽．

```
% git stash pop
```
