call apoc.meta.stats() yield labelCount, relTypeCount, propertyKeyCount, nodeCount, relCount
with labelCount, relTypeCount, propertyKeyCount, nodeCount, relCount
return labelCount + relTypeCount + propertyKeyCount + nodeCount + relCount = 195158 as outcome