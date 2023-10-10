---
slug: github
title: github action 失敗
authors: [ban]
tags: [github, github action]
---

某天在github action 執行時發生以下錯誤訊息
```
Error: The deploy step encountered an error: The process '/usr/bin/git' failed with exit code 128 ❌
Deployment failed! ❌
```

# 原因

查了一下發現，是因為我使用GITHUB_TOKEN執行部署，預設GITHUB_TOKEN running workflow 是只有 Read，需要把權限打開。

# 解決方法
1. 進入 GitHub Repository 的 Settings 頁面。
2. 點擊左側選單中的 "Actions" 底下的 "General"。
    
   ![截圖 2023-10-04 下午9.54.42.png](%E6%88%AA%E5%9C%96%202023-10-04%20%E4%B8%8B%E5%8D%889.54.42.png)

3. 勾選 "Read and write permissions" 權限，保存更改。

   ![截圖 2023-10-04 下午9.54.48.png](%E6%88%AA%E5%9C%96%202023-10-04%20%E4%B8%8B%E5%8D%889.54.48.png)

# 解決方法2(2023-10-10)
看了一下原先官方的示例才發現，是原先自己沒寫好。
直接在yml添加上權限就可以了
   ![截圖 2023-10-10 下午3.45.56.png](%E6%88%AA%E5%9C%96%202023-10-10%20%E4%B8%8B%E5%8D%883.45.56.png)
# ref
[【Git】workflows 部署 vuepress 错误“The process ‘/usr/bin/git‘ failed with exit code 128“_the process '/usr/bin/git' failed with exit code 1-CSDN博客](https://blog.csdn.net/weixin_42282187/article/details/124766382)
