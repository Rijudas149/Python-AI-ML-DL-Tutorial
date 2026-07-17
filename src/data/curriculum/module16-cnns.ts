import type { Topic } from '../../types';

export const module16Topics: Topic[] = [
{
      id: `dl-conv`,
      title: `Convolutional Layers`,
      description: `Spatial feature extraction with convolution and pooling.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `conv2d`,
          title: `Convolution Operation`,
          content: `Filter slides over input computing dot products. Learns local patterns: edges, textures, shapes. nn.Conv2d(in_channels, out_channels, kernel_size).

- padding preserves spatial dimensions
- stride reduces spatial size
- Channels = feature maps (depth)
- Parameter sharing: same filter across spatial locations`,
          example: `import torch
import torch.nn as nn

conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
x = torch.randn(1, 3, 32, 32)  # batch, channels, H, W
out = conv(x)
print(out.shape)`,
          output: `torch.Size([1, 16, 32, 32])`,
          keyPoints: [
            `padding preserves spatial dimensions`,
            `stride reduces spatial size`,
            `Channels = feature maps (depth)`,
            `Parameter sharing: same filter across spatial locations`
          ]
        },
        {
          id: `pooling`,
          title: `Pooling Layers`,
          content: `MaxPool2d: takes maximum in window. AvgPool2d: average. Reduces spatial dimensions, provides translation invariance.

- Pooling reduces computation and overfitting
- Max pooling most common
- Global Average Pooling replaces flatten + FC
- AdaptiveAvgPool2d for variable input sizes`,
          example: `import torch
import torch.nn as nn

pool = nn.MaxPool2d(2, stride=2)
x = torch.randn(1, 16, 32, 32)
print(pool(x).shape)`,
          output: `torch.Size([1, 16, 16, 16])`,
          keyPoints: [
            `Pooling reduces computation and overfitting`,
            `Max pooling most common`,
            `Global Average Pooling replaces flatten + FC`,
            `AdaptiveAvgPool2d for variable input sizes`
          ]
        },
        {
          id: `receptive`,
          title: `Receptive Field`,
          content: `Each neuron sees a region of input. Receptive field grows with depth and pooling. Deep layers capture global context.

- Stacking conv layers expands receptive field
- Dilated convolutions expand field without pooling
- Large receptive field needed for global context
- Feature hierarchy: edges → parts → objects`,
          keyPoints: [
            `Stacking conv layers expands receptive field`,
            `Dilated convolutions expand field without pooling`,
            `Large receptive field needed for global context`,
            `Feature hierarchy: edges → parts → objects`
          ]
        },
        {
          id: `cnn-arch`,
          title: `Basic CNN Architecture`,
          content: `Conv → ReLU → Pool repeated, then Flatten → FC → output. Modern: all conv without large FC layers.

- Feature extractor + classifier pattern
- Spatial dimensions shrink with pooling
- BatchNorm after conv stabilizes training
- Data augmentation critical for small datasets`,
          example: `import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
        )
        self.classifier = nn.Linear(64 * 7 * 7, 10)
    def forward(self, x):
        x = self.features(x)
        return self.classifier(x.view(x.size(0), -1))`,
          keyPoints: [
            `Feature extractor + classifier pattern`,
            `Spatial dimensions shrink with pooling`,
            `BatchNorm after conv stabilizes training`,
            `Data augmentation critical for small datasets`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-conv-1`,
          question: `Output shape of Conv2d(3,16,3,padding=1) on 32x32 input.`,
          solution: `import torch.nn as nn
import torch
print(nn.Conv2d(3,16,3,padding=1)(torch.randn(1,3,32,32)).shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-conv-2`,
          question: `Output shape after MaxPool2d(2) on 16x32x32.`,
          solution: `import torch.nn as nn
import torch
print(nn.MaxPool2d(2)(torch.randn(1,16,32,32)).shape)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-16`,
      references: [
        {
          id: `cs231n-conv-notes`,
          title: `CS231n Convolutional Neural Networks`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `https://cs231n.github.io/convolutional-networks/`,
          description: `Detailed notes on convolution, pooling, and spatial feature extraction.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `alexnet-paper`,
          title: `ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)`,
          source: `NeurIPS`,
          type: `paper`,
          url: `https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks`,
          description: `Breakthrough 2012 paper that launched the deep learning revolution in vision.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        }
      ]
    },
{
      id: `dl-cnn-arch`,
      title: `CNN Architectures (ResNet, VGG)`,
      description: `Landmark architectures that shaped computer vision.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `vgg`,
          title: `VGG`,
          content: `Small 3×3 filters stacked deeply. Simple uniform architecture. VGG16/19 widely used for transfer learning baseline.

- 3x3 conv stacks replace large filters
- Simplicity aids understanding and transfer
- Very parameter-heavy in FC layers
- Superseded by ResNet but good baseline`,
          keyPoints: [
            `3x3 conv stacks replace large filters`,
            `Simplicity aids understanding and transfer`,
            `Very parameter-heavy in FC layers`,
            `Superseded by ResNet but good baseline`
          ]
        },
        {
          id: `resnet`,
          title: `ResNet & Skip Connections`,
          content: `Residual blocks: output = F(x) + x. Skip connections solve vanishing gradient, enable 100+ layer networks.

- Identity skip when dimensions match
- 1x1 conv projection when dimensions differ
- ResNet-50/101 standard for transfer learning
- BatchNorm before activation in modern variants`,
          example: `import torch
import torch.nn as nn

class ResBlock(nn.Module):
    def __init__(self, channels):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(channels, channels, 3, padding=1), nn.ReLU(),
            nn.Conv2d(channels, channels, 3, padding=1))
    def forward(self, x):
        return torch.relu(self.conv(x) + x)  # skip connection

print(ResBlock(64)(torch.randn(1, 64, 32, 32)).shape)`,
          output: `torch.Size([1, 64, 32, 32])`,
          keyPoints: [
            `Identity skip when dimensions match`,
            `1x1 conv projection when dimensions differ`,
            `ResNet-50/101 standard for transfer learning`,
            `BatchNorm before activation in modern variants`
          ]
        },
        {
          id: `modern`,
          title: `EfficientNet, ConvNeXt`,
          content: `EfficientNet scales depth/width/resolution jointly. ConvNeXt modernizes ResNet with transformer-inspired design.

- Compound scaling balances model dimensions
- EfficientNet-B0 to B7 for different compute budgets
- ConvNeXt competitive with vision transformers
- Architecture search automates design`,
          keyPoints: [
            `Compound scaling balances model dimensions`,
            `EfficientNet-B0 to B7 for different compute budgets`,
            `ConvNeXt competitive with vision transformers`,
            `Architecture search automates design`
          ]
        },
        {
          id: `torchvision`,
          title: `torchvision.models`,
          content: `Pretrained models: resnet50, efficientnet_b0, vit_b_16. weights=ResNet50_Weights.IMAGENET1K_V2.

- Pretrained weights from ImageNet
- Replace final FC for your num_classes
- Feature extraction: remove classifier head
- Fine-tune all or freeze early layers`,
          example: `from torchvision import models

model = models.resnet18(weights=None)
print(model.fc.in_features)  # 512 for resnet18`,
          output: `512`,
          keyPoints: [
            `Pretrained weights from ImageNet`,
            `Replace final FC for your num_classes`,
            `Feature extraction: remove classifier head`,
            `Fine-tune all or freeze early layers`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-res-1`,
          question: `Import resnet18 from torchvision and print fc input features.`,
          solution: `from torchvision import models
print(models.resnet18(weights=None).fc.in_features)`,
          difficulty: `easy`
        },
        {
          id: `ex-res-2`,
          question: `Implement skip connection: output = F(x) + x conceptually.`,
          solution: `import torch
x = torch.tensor([1.0, 2.0])
F_x = x * 2
print((F_x + x).tolist())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-16`,
      references: [
        {
          id: `resnet-paper`,
          title: `Deep Residual Learning for Image Recognition (ResNet)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1512.03385`,
          description: `Skip connections enabling training of very deep networks — foundational architecture.`
        },
        {
          id: `vgg-paper`,
          title: `Very Deep Convolutional Networks (VGG)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1409.1556`,
          description: `Showed depth with small 3×3 filters improves representation learning.`
        },
        {
          id: `alexnet-paper`,
          title: `ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)`,
          source: `NeurIPS`,
          type: `paper`,
          url: `https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks`,
          description: `Breakthrough 2012 paper that launched the deep learning revolution in vision.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        }
      ]
    },
{
      id: `dl-transfer`,
      title: `Transfer Learning`,
      description: `Leverage pretrained models for new tasks with limited data.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `strategy`,
          title: `Transfer Learning Strategies`,
          content: `Feature extraction: freeze backbone, train head. Fine-tuning: unfreeze some/all layers with low LR. More data → more fine-tuning.

- Freeze backbone when data is very small
- Fine-tune later layers with small LR
- Pretrain on similar domain when possible
- Replace classifier head always`,
          example: `import torch.nn as nn
from torchvision import models

model = models.resnet18(weights="IMAGENET1K_V1")
for param in model.parameters():
    param.requires_grad = False
model.fc = nn.Linear(512, 10)  # new head
print(model.fc.weight.requires_grad)`,
          output: `True`,
          keyPoints: [
            `Freeze backbone when data is very small`,
            `Fine-tune later layers with small LR`,
            `Pretrain on similar domain when possible`,
            `Replace classifier head always`
          ]
        },
        {
          id: `finetune`,
          title: `Fine-Tuning Best Practices`,
          content: `Discriminative learning rates: lower LR for early layers. Gradual unfreezing. Monitor val loss carefully.

- LR for backbone << LR for head (10-100x)
- Unfreeze gradually from top to bottom
- Strong augmentation when fine-tuning
- Early stopping essential — overfits quickly`,
          keyPoints: [
            `LR for backbone << LR for head (10-100x)`,
            `Unfreeze gradually from top to bottom`,
            `Strong augmentation when fine-tuning`,
            `Early stopping essential — overfits quickly`
          ]
        },
        {
          id: `domain`,
          title: `Domain Adaptation`,
          content: `Pretrained on ImageNet, fine-tune on medical/satellite/etc. Domain gap affects transfer quality.

- Large domain gap reduces transfer benefit
- Self-supervised pretraining on target domain helps
- SimCLR, MoCo for unsupervised pretraining
- Foundation models reduce need for task-specific pretraining`,
          keyPoints: [
            `Large domain gap reduces transfer benefit`,
            `Self-supervised pretraining on target domain helps`,
            `SimCLR, MoCo for unsupervised pretraining`,
            `Foundation models reduce need for task-specific pretraining`
          ]
        },
        {
          id: `hub`,
          title: `PyTorch Hub & timm`,
          content: `torch.hub.load for pretrained models. timm (PyTorch Image Models) library with 500+ architectures.

- timm unified API for many architectures
- timm.create_model with pretrained=True
- Easy model ensembling with timm
- Check license for commercial pretrained weights`,
          keyPoints: [
            `timm unified API for many architectures`,
            `timm.create_model with pretrained=True`,
            `Easy model ensembling with timm`,
            `Check license for commercial pretrained weights`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-tl-1`,
          question: `Replace resnet18 fc with Linear(512, 5).`,
          solution: `from torchvision import models
import torch.nn as nn
m = models.resnet18(weights=None)
m.fc = nn.Linear(512, 5)
print(m.fc.out_features)`,
          difficulty: `easy`
        },
        {
          id: `ex-tl-2`,
          question: `Freeze all params, verify requires_grad False.`,
          solution: `from torchvision import models
m = models.resnet18(weights=None)
for p in m.parameters(): p.requires_grad = False
print(all(not p.requires_grad for p in m.parameters()))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-16`,
      references: [
        {
          id: `pytorch-transfer-learning`,
          title: `PyTorch Transfer Learning Tutorial`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html`,
          description: `Fine-tuning pretrained models for new tasks with limited data.`
        },
        {
          id: `torchvision-models`,
          title: `torchvision Models`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/vision/stable/models.html`,
          description: `Pretrained ResNet, VGG, EfficientNet, and other vision backbones.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    },
{
      id: `dl-detection`,
      title: `Object Detection`,
      description: `Locate and classify multiple objects in images.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `metrics-det`,
          title: `Detection Metrics`,
          content: `IoU (Intersection over Union) measures box overlap. mAP (mean Average Precision) standard benchmark metric.

- IoU > 0.5 typically considered match
- mAP averaged over classes and IoU thresholds
- Precision-recall tradeoff at confidence threshold
- COCO dataset standard benchmark`,
          example: `def iou(box1, box2):
    x1 = max(box1[0], box2[0]); y1 = max(box1[1], box2[1])
    x2 = min(box1[2], box2[2]); y2 = min(box1[3], box2[3])
    inter = max(0, x2-x1) * max(0, y2-y1)
    area1 = (box1[2]-box1[0]) * (box1[3]-box1[1])
    area2 = (box2[2]-box2[0]) * (box2[3]-box2[1])
    return inter / (area1 + area2 - inter)

print(round(iou([0,0,10,10], [5,5,15,15]), 3))`,
          output: `0.143`,
          keyPoints: [
            `IoU > 0.5 typically considered match`,
            `mAP averaged over classes and IoU thresholds`,
            `Precision-recall tradeoff at confidence threshold`,
            `COCO dataset standard benchmark`
          ]
        },
        {
          id: `rcnn`,
          title: `R-CNN Family`,
          content: `Two-stage: RPN proposes regions, classifier refines. Faster R-CNN real-time capable. Mask R-CNN adds segmentation.

- Two-stage: propose then classify
- Faster R-CNN shares backbone with RPN
- Anchor boxes at multiple scales/aspect ratios
- Accurate but slower than one-stage`,
          keyPoints: [
            `Two-stage: propose then classify`,
            `Faster R-CNN shares backbone with RPN`,
            `Anchor boxes at multiple scales/aspect ratios`,
            `Accurate but slower than one-stage`
          ]
        },
        {
          id: `yolo`,
          title: `YOLO & One-Stage Detectors`,
          content: `YOLO: single pass prediction grid. SSD, RetinaNet with focal loss. Faster, good for real-time applications.

- One-stage: direct bounding box prediction
- YOLO v8/v9/v10 state-of-the-art speed/accuracy
- Real-time on edge devices possible
- Trade accuracy for speed vs two-stage`,
          keyPoints: [
            `One-stage: direct bounding box prediction`,
            `YOLO v8/v9/v10 state-of-the-art speed/accuracy`,
            `Real-time on edge devices possible`,
            `Trade accuracy for speed vs two-stage`
          ]
        },
        {
          id: `tools`,
          title: `Detection Tools`,
          content: `torchvision.models.detection, ultralytics YOLO, Detectron2 (Meta). Pretrained on COCO.

- Detectron2 research platform from Meta
- Ultralytics YOLO easy API for training/inference
- Export to ONNX/TensorRT for deployment
- Custom dataset in COCO JSON format`,
          keyPoints: [
            `Detectron2 research platform from Meta`,
            `Ultralytics YOLO easy API for training/inference`,
            `Export to ONNX/TensorRT for deployment`,
            `Custom dataset in COCO JSON format`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-det-1`,
          question: `Compute IoU of identical boxes [0,0,10,10].`,
          solution: `def iou(b1,b2):
    inter = max(0,min(b1[2],b2[2])-max(b1[0],b2[0])) * max(0,min(b1[3],b2[3])-max(b1[1],b2[1]))
    a1=(b1[2]-b1[0])*(b1[3]-b1[1]); a2=(b2[2]-b2[0])*(b2[3]-b2[1])
    return inter/(a1+a2-inter)
print(iou([0,0,10,10],[0,0,10,10]))`,
          difficulty: `easy`
        },
        {
          id: `ex-det-2`,
          question: `Name one two-stage and one one-stage detector.`,
          solution: `print({"two_stage": "Faster R-CNN", "one_stage": "YOLO"})`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-16`,
      references: [
        {
          id: `yolo-paper`,
          title: `You Only Look Once: Unified Real-Time Object Detection`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1506.02640`,
          description: `Single-pass object detection treating detection as regression problem.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `torchvision-models`,
          title: `torchvision Models`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/vision/stable/models.html`,
          description: `Pretrained ResNet, VGG, EfficientNet, and other vision backbones.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    },
{
      id: `dl-segmentation`,
      title: `Image Segmentation`,
      description: `Pixel-level classification: semantic and instance segmentation.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `semantic`,
          title: `Semantic Segmentation`,
          content: `Classify every pixel. FCN, U-Net, DeepLab architectures. Encoder-decoder with skip connections.

- U-Net skip connections preserve spatial detail
- Encoder downsamples, decoder upsamples
- Dice loss common for imbalanced segmentation
- Medical imaging primary application`,
          keyPoints: [
            `U-Net skip connections preserve spatial detail`,
            `Encoder downsamples, decoder upsamples`,
            `Dice loss common for imbalanced segmentation`,
            `Medical imaging primary application`
          ]
        },
        {
          id: `instance`,
          title: `Instance Segmentation`,
          content: `Detect and segment each object instance separately. Mask R-CNN: detection + mask head per ROI.

- Combines detection and segmentation
- Mask R-CNN adds mask branch to Faster R-CNN
- Each instance gets unique mask
- Panoptic segmentation: semantic + instance`,
          keyPoints: [
            `Combines detection and segmentation`,
            `Mask R-CNN adds mask branch to Faster R-CNN`,
            `Each instance gets unique mask`,
            `Panoptic segmentation: semantic + instance`
          ]
        },
        {
          id: `unet`,
          title: `U-Net Architecture`,
          content: `Symmetric encoder-decoder with skip connections. Concatenates encoder features to decoder. Excellent for biomedical segmentation.

- Skip connections recover fine spatial details
- Works well with limited training data
- segmentation_models_pytorch library
- Augment with elastic deformations for medical`,
          example: `# U-Net concept: encoder path downsamples, decoder upsamples
# Skip connections concatenate features at each level
print("Encoder -> Bottleneck -> Decoder + Skips")`,
          output: `Encoder -> Bottleneck -> Decoder + Skips`,
          keyPoints: [
            `Skip connections recover fine spatial details`,
            `Works well with limited training data`,
            `segmentation_models_pytorch library`,
            `Augment with elastic deformations for medical`
          ]
        },
        {
          id: `metrics-seg`,
          title: `Segmentation Metrics`,
          content: `IoU per class (Jaccard index). Dice coefficient. Pixel accuracy misleading with class imbalance.

- Mean IoU averaged over classes
- Dice = 2|A∩B|/(|A|+|B|)
- Boundary F1 for precise edge evaluation
- Report per-class metrics not just mean`,
          keyPoints: [
            `Mean IoU averaged over classes`,
            `Dice = 2|A∩B|/(|A|+|B|)`,
            `Boundary F1 for precise edge evaluation`,
            `Report per-class metrics not just mean`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-seg-1`,
          question: `Compute Dice coefficient for identical masks of 100 pixels.`,
          solution: `intersection = 100
dice = 2 * intersection / (100 + 100)
print(dice)`,
          difficulty: `easy`
        },
        {
          id: `ex-seg-2`,
          question: `Name encoder-decoder architecture for biomedical segmentation.`,
          solution: `print("U-Net")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-16`,
      references: [
        {
          id: `unet-paper`,
          title: `U-Net: Convolutional Networks for Biomedical Image Segmentation`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1505.04597`,
          description: `Encoder-decoder architecture with skip connections for dense prediction.`
        },
        {
          id: `mask-rcnn-paper`,
          title: `Mask R-CNN`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1703.06870`,
          description: `Instance segmentation framework extending Faster R-CNN with pixel masks.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        }
      ]
    }
];
